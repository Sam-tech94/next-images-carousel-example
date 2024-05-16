import Carousel from "./components/carousel";
import SecondCarousel from "./components/secondCarousel";
import DarkVariant from "./components/darkVariant";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Carousel />
      <div className="mt-10">
      <SecondCarousel />
      </div>
      <div className="mt-10">
        <DarkVariant />
      </div>
    </main>
  );
}
