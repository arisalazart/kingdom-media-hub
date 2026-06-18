import Script from "next/script";
import { env } from "@/lib/env";

/**
 * Injects GA4, Meta Pixel and LinkedIn Insight tags — but only the ones that
 * are actually configured via env. With no keys set this renders nothing,
 * keeping the bundle clean during local development.
 */
export function AnalyticsProvider() {
  return (
    <>
      {env.ga4Id && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${env.ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${env.ga4Id}',{anonymize_ip:true});`}
          </Script>
        </>
      )}

      {env.metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${env.metaPixelId}');fbq('track','PageView');`}
        </Script>
      )}

      {env.linkedInPartnerId && (
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`_linkedin_partner_id='${env.linkedInPartnerId}';window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);(function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s=document.getElementsByTagName('script')[0];var b=document.createElement('script');b.type='text/javascript';b.async=true;b.src='https://snap.licdn.com/li.lms-analytics/insight.min.js';s.parentNode.insertBefore(b,s)})(window.lintrk);`}
        </Script>
      )}
    </>
  );
}
