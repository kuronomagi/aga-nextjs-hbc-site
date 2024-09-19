import { useRouter, usePathname, useParams, useSearchParams } from 'next/navigation';
import { pagePaths } from '~/constants/paths';

export const useRouterHook = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  // NOTE: 「useSearchParams() should be wrapped in a suspense boundary at page」
  // 使う時は <Suspense></Suspense> を使用すること。
  // const searchParams = useSearchParams();

  function toRoot() {
    router.push('/');
  }

  return {
    router,
    pathname,
    params,
    // searchParams,
    pagePaths,

    move: {
      toRoot,
    },
  };
};
