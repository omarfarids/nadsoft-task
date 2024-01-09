import React from "react";

const News = () => {
  return (
    <div className="my-20">
      <h2 className="font-bold text-2xl mb-5">Highlights about Pandemic</h2>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="bg-white p-10 w-full border-t-8 border-t-primary py-5 px-5 w-full border border-[#091E4224] rounded-b-lg shadow-md gap-8">
          <p className="text-md pb-3 text-gray">Press release</p>
          <p className="text-md pb-3 text-gray">Mar 31, 2020</p>
          <p className="text-lg font-bold">
            The COVID-19 pandemic demonstrates that our political leaders can
            act decisively when faced with an acute threat. Let us see if we can
            push those leaders to show the same decisiveness in dealing with
            threats that are no less real but that develop over longer periods
            of time.
          </p>
        </div>

        <div className="bg-white p-10 w-full border-t-8 border-t-primary py-5 px-5 w-full border border-[#091E4224] rounded-b-lg shadow-md gap-8">
          <p className="text-md pb-3 text-gray">Press release</p>
          <p className="text-md pb-3 text-gray">Feb 24, 2022</p>
          <p className="text-lg font-bold">
            6.7 million children have now suffered from COVID-19-associated
            orphanhood and caregiver death in the past two years.
          </p>
        </div>

        <div className="bg-white p-10 w-full border-t-8 border-t-primary py-5 px-5 w-full border border-[#091E4224] rounded-b-lg shadow-md gap-8">
          <p className="text-md pb-3 text-gray">Press release</p>
          <p className="text-md pb-3 text-gray">May 11, 2022</p>
          <p className="text-lg font-bold">
            With the acute phase of the Covid-19 pandemic fading even as the
            coronavirus persists and evolves, a new normal is taking shape
            around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
