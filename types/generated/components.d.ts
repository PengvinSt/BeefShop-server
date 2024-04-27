import type { Schema, Attribute } from '@strapi/strapi';

export interface ShopPostBlockShopPostBlock extends Schema.Component {
  collectionName: 'components_shop_post_block_shop_post_blocks';
  info: {
    displayName: 'Shop Post Block';
    icon: 'bold';
    description: '';
  };
  attributes: {
    post_text: Attribute.Blocks;
    post_media: Attribute.Media;
    media_link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shop-post-block.shop-post-block': ShopPostBlockShopPostBlock;
    }
  }
}
