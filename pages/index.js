import React, { useState } from "react";
import Head from "next/head";
import fs from "fs";
import Map from "../components/map";
import client from "../shared/contentful";
import contentfulContent from "../shared/contentfulContent";

const Home = ({
  aboutTabContent,
  categories,
  hostname,
  mainStoryContent,
  stories,
  submitTabContent,
  thankYouForSharingContent,
  welcomeOverlayContent
}) => {
  const [activeCategory, setActiveCategory] = useState("all");
  return (
    <div>
      <Head>
        <title>Primary Children's Hospital</title>
        <meta
          property="og:title"
          content="Share your child’s story or your own childhood story as a message of hope for others."
        />
        <meta property="og:url" content={`https://herekidswin.org/`} />
      </Head>

      <Map
        aboutTabContent={aboutTabContent}
        activeCategory={activeCategory}
        categories={categories}
        hostname={hostname}
        mainStoryContent={mainStoryContent}
        setActiveCategory={setActiveCategory}
        stories={stories}
        submitTabContent={submitTabContent}
        thankYouForSharingContent={thankYouForSharingContent}
        welcomeOverlayContent={welcomeOverlayContent}
      />
    </div>
  );
};

Home.getInitialProps = async ({ req }) => {
  let siteContent;

  try {
    if (fs.existsSync("data/site-content.json")) {
      siteContent = JSON.parse(
        fs.readFileSync("data/site-content.json", "utf8")
      );
    } else {
      siteContent = await contentfulContent();
    }
  } catch (err) {}

  const stories = siteContent.stories;
  const categories = siteContent.categories;
  const aboutTabContent = siteContent.contentBlocks.aboutTabContent;
  const submitTabContent = siteContent.contentBlocks.submitTabContent;
  const thankYouForSharingContent =
    siteContent.contentBlocks.thankYouForSharingContent;
  const mainStoryContent = siteContent.contentBlocks.mainStoryContent;
  const welcomeOverlayContent = siteContent.contentBlocks.welcomeOverlayContent;

  const hostname = req ? req.headers.host : window.location.hostname;

  return {
    stories: stories.items,
    categories: categories.items.sort((a, b) => {
      if (a.fields.order > b.fields.order) {
        return 1;
      } else if (a.fields.order < b.fields.order) {
        return -1;
      }
      return 0;
    }),
    aboutTabContent,
    hostname,
    mainStoryContent,
    submitTabContent,
    thankYouForSharingContent,
    welcomeOverlayContent
  };
};

export default Home;
