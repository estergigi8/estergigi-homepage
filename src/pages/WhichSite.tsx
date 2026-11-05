import Copyright from "../components/sections/Copyright";

// /איזה-אתר-העסק-שלי-צריך – like the original page (post 4242), a full-screen frame around the Lovable quiz.
// sandbox without allow-top-navigation: the embedded app can't redirect this tab elsewhere.
export default function WhichSite() {
  return (
    <>
      <main>
        <h1 className="sr-only">איזה אתר העסק שלי צריך?</h1>
        <iframe
          src="https://ester-quiz.lovable.app/"
          title="איזה אתר העסק שלי צריך?"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          className="block h-screen w-full border-0"
        />
      </main>
      <Copyright />
    </>
  );
}
