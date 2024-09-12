import React from "react";
import Hero from "../products/Hero";
import Left from "./Left";
import Right from "./Right";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <Left
        imageURL="media/kite.png"
        productName="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Right
        imageURL="media/console.png"
        productName ="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""

      />
      <Left
        imageURL="media/coin.png"
        productName="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Right
        imageURL="media/kiteconnect.png"
        productName ="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""

      />
      <Left
        imageURL="media/varsity.png"
        productName="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <p className="text-center fs-4">
      Want to know more about our technology stack? Check out the Zerodha.tech blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;
