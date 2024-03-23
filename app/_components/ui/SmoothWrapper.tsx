"use client";
import LandingWrap from "../landing/LandingWrap";
import ProcessWrap from "../process/ProcessWrap";
import SliderWrap from "../slider/SliderWrap";
import TabsAPI from "../tabs/TabsAPI";
import MediaWrap from "../media/MediaWrap";
import CollaborationWrap from "../collaboration/CollaborationWrap";
import Compatibility from "../collaboration/Compatibility";
import FooterWrap from "../footer/FooterWrap";
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

requestAnimationFrame(raf);

const SmoothWrapper = () => {
  return (
    <>
      <LandingWrap />
      <ProcessWrap />
      <TabsAPI />
      <SliderWrap />
      <MediaWrap />
      <CollaborationWrap />
      <Compatibility />
      <FooterWrap />
    </>
  );
};

export default SmoothWrapper;
