const Footernav = () => {
  return (
    <div className="mx-4 sm:mx-8 lg:mx-80 flex flex-wrap gap-x-8 gap-y-10 mb-10 text-[13px]">
      {/* 1: Shop and Learn + Wallet */}
      <div className="flex flex-col gap-2 basis-full sm:basis-[50%] md:basis-[33%] lg:basis-auto min-w-[150px]">
        <h4 className="font-bold">Shop and Learn</h4>
        <ul className="space-y-[2px]">
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>AirPods</li>
          <li>TV & Home</li>
          <li>AirTag</li>
          <li>Accessories</li>
          <li>Gift Cards</li>
        </ul>
        <h4 className="font-bold mt-4">Apple Wallet</h4>
        <ul className="space-y-[2px]">
          <li>Wallet</li>
        </ul>
      </div>

      {/* 2: Account + Entertainment */}
      <div className="flex flex-col gap-5 basis-full sm:basis-[50%] md:basis-[33%] lg:basis-auto min-w-[150px]">
        <div>
          <h4 className="font-bold mb-1">Account</h4>
          <ul className="space-y-[2px]">
            <li>Manage Your Apple Account</li>
            <li>Apple Store Account</li>
            <li>iCloud.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Entertainment</h4>
          <ul className="space-y-[2px]">
            <li>Apple One</li>
            <li>Apple TV+</li>
            <li>Apple Music</li>
            <li>Apple Arcade</li>
            <li>Apple Podcasts</li>
            <li>Apple Books</li>
            <li>App Store</li>
          </ul>
        </div>
      </div>

      {/* 3: Apple Store */}
      <div className="flex flex-col gap-2 basis-full sm:basis-[50%] md:basis-[33%] lg:basis-auto min-w-[150px]">
        <h4 className="font-bold">Apple Store</h4>
        <ul className="space-y-[2px]">
          <li>Find a Store</li>
          <li>Genius Bar</li>
          <li>Today at Apple</li>
          <li>Group Reservations</li>
          <li>Apple Camp</li>
          <li>Apple Trade In</li>
          <li>Ways to Buy</li>
          <li>Recycling Programme</li>
          <li>Order Status</li>
          <li>Shopping Help</li>
        </ul>
      </div>

      {/* 4: Business + Education + Healthcare */}
      <div className="flex flex-col gap-5 basis-full sm:basis-[50%] md:basis-[33%] lg:basis-auto min-w-[150px]">
        <div>
          <h4 className="font-bold">For Business</h4>
          <ul className="space-y-[2px]">
            <li>Apple and Business</li>
            <li>Shop for Business</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">For Education</h4>
          <ul className="space-y-[2px]">
            <li>Apple and Education</li>
            <li>Shop for Education</li>
            <li>Shop for University</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">For Healthcare</h4>
          <ul className="space-y-[2px]">
            <li>Apple and Healthcare</li>
            <li>Mac in Healthcare</li>
            <li>Health on Apple Watch</li>
          </ul>
        </div>
      </div>

      {/* 5: Apple Values + About Apple */}
      <div className="flex flex-col gap-4 basis-full sm:basis-[100%] md:basis-[100%] lg:basis-auto min-w-[200px]">
        <div>
          <h4 className="font-bold mb-1">Apple Values</h4>
          <ul className="space-y-[2px]">
            <li>Accessibility</li>
            <li>Education</li>
            <li>Environment</li>
            <li>Privacy</li>
            <li>Supply Chain Innovation</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mt-3 mb-1">About Apple</h4>
          <ul className="space-y-[2px]">
            <li>Newsroom</li>
            <li>Apple Leadership</li>
            <li>Career Opportunities</li>
            <li>Investors</li>
            <li>Ethics & Compliance</li>
            <li>Events</li>
            <li>Contact Apple</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footernav;
