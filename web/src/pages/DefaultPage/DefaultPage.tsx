import 'bootstrap/dist/css/bootstrap.min.css';
import { MetaTags } from '@redwoodjs/web'
import DefaultLayout from 'src/layouts/DefaultLayout/DefaultLayout';
import { useScrollBlock } from 'src/hooks/useScrollBlock';


const DefaultPage = () => {
  const [blockScroll, allowScroll] = useScrollBlock();
      blockScroll();
  return (
    <>
      <MetaTags title="Default" description="Default page" />
      <DefaultLayout />
    </>
  )
}

export default DefaultPage
