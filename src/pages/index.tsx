import Layout from '@theme/Layout';

import HeroSection from '../components/HeroSection/HeroSection';



export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Rasterex - The Power of Universal Viewing`}
      description="Rasterex can view ALL formats like CAD,BIM, PDF and more. Our SDK empower software developers to improve collaboration and integration.">
      <main>
        <HeroSection />
      </main>
    </Layout>
  );
}
