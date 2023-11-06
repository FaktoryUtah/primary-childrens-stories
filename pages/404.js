import WelcomeMap from "components/animations/welcome-map";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";

const FourOhFour = () => {
  return (
    <div>
      <Head>
        <title>{`404 | Primary Children's Hospital Stories`}</title>
        <meta
          property="og:title"
          content={`404 | Primary Children's Hospital Stories`}
        />
      </Head>
      <div
        className="py-12 relative h-screen overflow-y-scroll"
        style={{
          backgroundImage: "url(/images/pch-background-2000.webp)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div
          className="relative z-30 story-content max-w-3xl xl:max-w-4xl mt-4 mb-12 bg-white px-4 mx-4 md:mx-auto lg:px-16 py-10 rounded-lg"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div>
            <h1>404: Page not found</h1>
            <p>
              Looks like you tried to access a page that doesn't exist. Please
              check the URL or click the button below to go back to the home
              page.
            </p>
          </div>

          <Link href="/" className="max-w-[300px] mx-auto grid justify-center">
            <WelcomeMap className="mx-auto -mb-12 max-w-full inline-block z-20 lg:w-2/3 min-h-[200px]" />
            <div className="w-full mt-4">
              <img
                alt={`Primary Children's Hospital`}
                className="max-w-full mx-auto"
                src="/images/primary-childrens-hospital-logo.svg"
                width="320"
                height="124"
              />
            </div>
          </Link>
        </div>
      </div>
      <div
        className="fixed inset-0 bg-blue-400 opacity-50"
        onClick={() => {
          Router.push("/");
        }}
      />
    </div>
  );
};

export default FourOhFour;
