import DoubleArrowRight from '@/assets/icons/double-arrow-right.svg';

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
    icon: DoubleArrowRight,
    children: [
      {
        index: '1-1',
        title: 'Đơn mới',
        route: '/new-orders'
      },
      {
        index: '1-2',
        title: 'Tất cả đơn',
        route: '/all-orders'
      }
    ]
  },
  {
    index: '2',
    title: 'Quản lý sản phẩm',
    icon: DoubleArrowRight,
    children: [
      {
        index: '2-1',
        title: 'Đơn mới 2',
        route: '/new-orders'
      },
      {
        index: '2-2',
        title: 'Tất cả đơn 2',
        route: '/all-orders'
      }
    ]
  },
  {
    index: '3',
    title: 'Tin tức',
    icon: DoubleArrowRight
  },
  {
    index: '4',
    title: 'Cấu hình Client',
    icon: DoubleArrowRight,
    children: [
      {
        index: '4-1',
        title: 'Đơn mới 4',
        route: '/new-orders'
      },
      {
        index: '4-2',
        title: 'Tất cả đơn 4',
        route: '/all-orders'
      }
    ]
  }
]