/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import CareerListingMinimal from 'views/CareerListingMinimal';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';

const CareerListingMinimalPage = ({ data }) => {
  return (
    <WithLayout data={data} component={CareerListingMinimal} layout={Main} />
  );
};

export default CareerListingMinimalPage;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.API_BASE_URL}/api/get-job-list`);
  const data = await res.json();
  return { props: { data } };
}
