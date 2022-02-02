/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from 'react';
import CareerOpening from 'views/CareerOpening';
import Main from 'layouts/Main';
import WithLayout from 'WithLayout';
import { useRouter } from 'next/router';

const CareerOpeningPage = ({ data }) => {
  const router = useRouter();
  const { jobId } = router.query;
  console.log(data);
  return <WithLayout data={data} component={CareerOpening} layout={Main} />;
};

export default CareerOpeningPage;

export async function getServerSideProps({ params: { jobId } }) {
  // Fetch data from external API
  const res = await fetch(`${process.env.API_BASE_URL}/api/get-job/${jobId}`);
  const data = await res.json();
  return { props: { data } };
}
