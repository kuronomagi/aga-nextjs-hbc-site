import React from 'react';
import { Text } from './style';

const handleReload = () => {
  window.location.reload();
};

export const ErrorComponent = () => {
  return (
    <div>
      <Text mt={[5, 6]}>アプリケーションエラーにより表示できません。</Text>
    </div>
  );
};
