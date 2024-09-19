/* eslint-disable */
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

// NOTE: 指定したqueryKeyのキャッシュデータを削除します。
export function removeQueryCache({ queryKey }: { queryKey: string }) {
  const queryClient: any = useQueryClient();
  useEffect(() => {
    queryClient.removeQueries(queryKey);
  }, []);
}
/* eslint-disable */
