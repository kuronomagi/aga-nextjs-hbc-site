export type JSObject = { [p: string]: any };
export type StyledSystemDefaultProps = {
  fontSize?: {};
  fontWeight?: {};
  width?: {};
  color?: {};
  bg?: {};
  size?: {};
  shadow?: {};
  zIndexes?: {};
  to?: any;
  opened?: boolean | string;
  current?: boolean | string;
  id?: {};
  /**
   * margin-topのスペース mt={[1, 2]}
   */
  mt?: number | (number | string)[] | null;
  /**
   * margin-rightのスペース mr={[1, 2]}
   */
  mr?: number | (number | string)[] | null;
  /**
   * margin-bottomのスペース mb={[1, 2]}
   */
  mb?: number | (number | string)[] | null;
  /**
   * margin-leftのスペース ml={[1, 2]}
   */
  ml?: number | (number | string)[] | null;
  /**
   * padding-topのスペース pt={[1, 2]}
   */
  pt?: number | (number | string)[] | null;
  /**
   * padding-rightのスペース pr={[1, 2]}
   */
  pr?: number | (number | string)[] | null;
  /**
   * padding-bottomのスペース pb={[1, 2]}
   */
  pb?: number | (number | string)[] | null;
  /**
   * padding-leftのスペース pl={[1, 2]}
   */
  pl?: number | (number | string)[] | null;
};

export type RouteParams = {
  id: string;
};

export type RouteMatchParams = {
  params: {
    request_estimate_ownership_id: string;
  };
};

export type LocationParams = {
  params: string;
  access_token?: string | undefined | null;
  view_type?: string | undefined | null;
};

export type LocationStateEstimateTypeParams = {
  state: {
    estimate_type_id: number;
    token: string;
  };
};

export type LocationNotificationParams = {
  params?: {
    estimate_id: string;
    request_estimate_id: string;
    back_screen: string;
    request_estimate_type: string;
  };
};
