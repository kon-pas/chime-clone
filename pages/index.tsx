import type { NextPage } from 'next';

import Head from 'next/head';

import Image from 'next/image';

import DualArticle from '@components/elements/DualArticle';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Chime</title>
        <meta name="description" content="Chime clone home page" />
      </Head>

      <DualArticle.Container>
        <DualArticle.Header>
          <h1>Overdraft fee-free with SpotMe</h1>
          <p>
            We&apos;ll spot you up to $200 on debit card purchases with no overdraft fees. Eligibility requirements apply.<sup>1</sup>
          </p>
        </DualArticle.Header>

        <DualArticle.ImageWrapper>
          <Image
            src="https://www.chime.com/wp-content/uploads/2021/03/spot-me-1.png"
            alt="Overdraft fee-free with SpotMe"
            layout="responsive"
            width="792"
            height="526"
          />
        </DualArticle.ImageWrapper>
      </DualArticle.Container>
    </div>
  )
}

export default Home
