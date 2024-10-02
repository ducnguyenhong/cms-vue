import NewsIcon from '@/assets/icons/news.svg';
import OrderIcon from '@/assets/icons/order.svg';
import ProductIcon from '@/assets/icons/product.svg';
import SettingIcon from '@/assets/icons/setting.svg';

interface Menu {
  index: string
  title: string
  icon?: string
  route?: string
  children?: Menu[]
}

export const MENU_DATA:Menu[] = [
  {
    index: '1',
    title: 'Đơn hàng',
    icon: OrderIcon,
    children: [
      {
        index: '1-1',
        title: 'Đơn mới',
        route: '/feedbacks'
      },
      {
        index: '1-2',
        title: 'Tất cả đơn',
        route: '/feedbacks'
      }
    ]
  },
  {
    index: '2',
    title: 'Quản lý sản phẩm',
    icon: ProductIcon,
    children: [
      {
        index: '2-1',
        title: 'Sản phẩm',
        route: '/feedbacks'
      },
      {
        index: '2-2',
        title: 'Background',
        route: '/feedbacks'
      },
      {
        index: '2-3',
        title: 'Sticker',
        route: '/feedbacks'
      },
      {
        index: '2-4',
        title: 'Danh mục',
        route: '/feedbacks'
      }
    ]
  },
  {
    index: '3',
    title: 'Tin tức',
    icon: NewsIcon,
    route: '/feedbacks'
  },
  {
    index: '4',
    title: 'Cấu hình Client',
    icon: SettingIcon,
    children: [
      {
        index: '4-1',
        title: 'Banner',
        route: '/feedbacks'
      },
      {
        index: '4-2',
        title: 'Bộ sưu tập',
        route: '/feedbacks'
      },
      {
        index: '4-3',
        title: 'Các bước đặt hàng',
        route: '/feedbacks'
      },
      {
        index: '4-4',
        title: 'Phản hồi',
        route: '/feedbacks'
      },
      {
        index: '4-5',
        title: 'Câu hỏi thường gặp',
        route: '/feedbacks'
      }
    ]
  }
]