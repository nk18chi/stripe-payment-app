import type { NextPage } from 'next';
import Head from 'next/head';
import SidebarWithHeader from '../components/SidebarWithHeader';
import Footer from '../components/Footer';
import SimpleTable from '../components/SimpleTable';

const Dashboard: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SidebarWithHeader>
          <SimpleTable />
        </SidebarWithHeader>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Dashboard;
