// core
import { Suspense } from 'react';
import { Metadata } from 'next';
// import { headers } from 'next/headers';

// constants
import { canonicalHost } from '~/constants/meta';

// client page
import Detail from './_detail';

type GetParams = {
  slug: string;
};

export async function generateMetadata({ params }: { params: GetParams }): Promise<Metadata> {
  return {
    title: `本気で治したい人におすすめしたい毛髪再生セット`,
    description: `医学的根拠で「毛が増えた」を実感できるAGA治療は当院におまかせください。`,
    keywords: `天神,美容,皮ふ科`,
    alternates: {
      canonical: `${canonicalHost}/signup/`,
    },

    // TODO: コメントアウトを外す
    // robots: {
    //   index: false,
    // },
  };
}

export default async function Page({ params }: { params: GetParams }) {
  // const client = getQueryClient();
  // const headersList = headers();

  // const myUrl = headersList.get('my-url') || '';

  // await client.prefetchQuery({
  //   queryKey: ['media-playlist', params.slug],
  //   queryFn: () => getMediaLivePlaylist({ slug: params.slug }),
  // });

  // const dehydratedState = dehydrate(client, {
  //   shouldDehydrateQuery: () => true,
  // });

  // const plainState = JSON.parse(JSON.stringify(dehydratedState));

  return (
    <>
      <Suspense fallback={<div></div>}>
        <>
          <article>
            <Suspense fallback={<div></div>}>
              <Detail params={{ slug: params.slug }} />
            </Suspense>
          </article>
        </>
      </Suspense>
    </>
  );
}
