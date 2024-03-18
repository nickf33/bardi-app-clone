import LandingWrap from "./_components/landing/LandingWrap";
import ProcessWrap from "./_components/process/ProcessWrap";
import SliderWrap from "./_components/slider/SliderWrap";
import TabsWrap from "./_components/tabs/TabsWrap";
import MediaWrap from "./_components/media/MediaWrap";
import CollaborationWrap from "./_components/collaboration/CollaborationWrap";
import Compatibility from "./_components/collaboration/Compatibility";
import FooterWrap from "./_components/footer/FooterWrap";

export default function Home() {
  return (
    <>
      <LandingWrap />
      <ProcessWrap />
      <TabsWrap />
      <SliderWrap />
      <MediaWrap />
      <CollaborationWrap />
      <Compatibility />
      <FooterWrap />
    </>
  );
}
