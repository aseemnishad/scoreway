import CustomersReviews from "../src/components/CustomersReviews";
import Faq from "../src/components/Faq";
import Features from "../src/components/Features";
import Demo1content1 from "../src/components/olmo/demo1/Demo1content1";
import Demo1content10 from "../src/components/olmo/demo1/Demo1content10";
import Demo1content2a from "../src/components/olmo/demo1/Demo1content2a";
import Demo1content3 from "../src/components/olmo/demo1/Demo1content3";
import Demo1content4 from "../src/components/olmo/demo1/Demo1content4";
import Demo1content5 from "../src/components/olmo/demo1/Demo1content5";
import Demo1content6 from "../src/components/olmo/demo1/Demo1content6";
import Demo1content9 from "../src/components/olmo/demo1/Demo1content9";
import Demo1faqs2 from "../src/components/olmo/demo1/Demo1faqs2";
import Demo1features2 from "../src/components/olmo/demo1/Demo1features2";
import Demo1Hero1 from "../src/components/olmo/demo1/Demo1Hero1";
import ShareFiles from "../src/components/ShareFiles";
import Layout from "../src/layout/Layout";

const Demo1 = () => {
  return (
    <Layout navLight getStartText navHoverColor="nav-orange-red-hover">
      <Demo1Hero1 />
      <Demo1features2 />
      <hr className="divider" />
      <ShareFiles />
      <Demo1content5 />
      <Demo1content3 />
      <Demo1content2a />
      <Features />
      <Demo1content1 />
      <Demo1content10 />
      <CustomersReviews />
      <Demo1content6 />
      <Demo1content9 />
      <Faq />
      <hr className="divider" />
      <Demo1faqs2 />
      <Demo1content4 />
    </Layout>
  );
};

export default Demo1;
