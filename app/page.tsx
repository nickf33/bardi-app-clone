import LandingWrap from "./_components/landing/LandingWrap";
import ProcessWrap from "./_components/process/ProcessWrap";
import MediaWrap from "./_components/media/MediaWrap";
import CollaborationWrap from "./_components/collaboration/CollaborationWrap";
import Compatibility from "./_components/collaboration/Compatibility";
import FooterWrap from "./_components/footer/FooterWrap";

export default function Home() {
  return (
    <>
      <LandingWrap />
      <ProcessWrap />
      <MediaWrap />
      <CollaborationWrap />
      <Compatibility />
      <FooterWrap />
    </>
  );
}
