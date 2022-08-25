import { NextPageWithLayout } from './_app'
import Head from 'next/head'
import { useRouter } from 'next/router'

// third-parties
import { motion } from 'framer-motion'

// layouts
import MainLayout from '$layouts/MainLayout'

// stores
import useCursorStore from '$stores/CursorStore'

// hooks
import useFadeUp from '$hooks/useFadeUp'
import useWindowSize from '$hooks/useWindowSize'

// svgs
import Four from '$svgs/Four'
import Zero from '$svgs/Zero'

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const number = {
  initial: {
    opacity: 0,
    paddingBottom: 300,
  },
  animate: {
    opacity: 1,
    paddingBottom: 0,
    transition: { duration: 1, ease: 'easeInOut' },
  },
}

const NotFound: NextPageWithLayout = () => {
  const router = useRouter()
  const { changeCursorType, resetCursorType } = useCursorStore()
  const { width } = useWindowSize()
  const [ref, animation, variants] = useFadeUp()
  const [ref2, animation2, variants2] = useFadeUp(1)
  const [ref3, animation3, variants3] = useFadeUp(2)

  return (
    <>
      <Head>
        <title>Page Not Found - Duo Design Lab</title>
      </Head>
      <motion.section
        onMouseEnter={() => changeCursorType('normal_brand_light')}
        onMouseLeave={resetCursorType}
        className="relative bg-ddl_brand h-[calc(100vh-7rem)] lg:h-[calc(100vh-6rem)] flex items-center justify-center ddl-container"
      >
        {width < 1201 && (
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="absolute inset-0 flex items-end justify-center overflow-hidden -mr-7 text-ddl_brand_light"
          >
            <motion.div variants={number}>
              <Four className="w-28 h-auto transform rotate-[125deg] -mb-10" />
            </motion.div>
            <motion.div variants={number}>
              <Zero className="h-auto w-36 transform rotate-[150deg] mb-1 ml-4" />
            </motion.div>
            <motion.div variants={number}>
              <Four className="h-auto -mb-1 w-28" />
            </motion.div>
          </motion.div>
        )}
        {width > 1200 && (
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="absolute inset-0 flex items-end justify-center overflow-hidden text-ddl_brand_light"
          >
            <motion.div variants={number}>
              <Four className="w-40 h-auto transform rotate-[125deg] -mb-10" />
            </motion.div>
            <motion.div variants={number}>
              <Zero className="h-auto w-60 transform rotate-[150deg] mb-4 ml-4" />
            </motion.div>
            <motion.div variants={number}>
              <Four className="w-40 h-auto" />
            </motion.div>
            <motion.div variants={number}>
              <Zero className="h-auto mb-4 w-60" />
            </motion.div>
            <motion.div variants={number}>
              <Four className="w-40 h-auto transform -rotate-[105deg] -mb-12" />
            </motion.div>
            <motion.div variants={number}>
              <Zero className="h-auto w-60 transform rotate-[65deg] mb-6" />
            </motion.div>
            <motion.div variants={number}>
              <Four className="w-40 h-auto" />
            </motion.div>
            <motion.div variants={number}>
              <Zero className="h-auto mb-4 w-60" />
            </motion.div>
            <motion.div variants={number}>
              <Four className="w-40 h-auto transform -rotate-[125deg] -mb-4" />
            </motion.div>
          </motion.div>
        )}

        <div className="relative px-16 -mt-20 text-center sm:px-0 text-ddl_brand_light">
          <h1 className="sr-only">Page Not Found</h1>
          <motion.p ref={ref} animate={animation} initial="hidden" variants={variants} className="text-big-visual sm:main-title">
            Sorry...
          </motion.p>
          <motion.p ref={ref2} animate={animation2} initial="hidden" variants={variants2} className="mt-5 mb-8 text-body">
            We couldn’t find the page you are looking for.
          </motion.p>
          <motion.button
            onClick={router.back}
            ref={ref3}
            animate={animation3}
            initial="hidden"
            variants={variants3}
            onMouseEnter={() => changeCursorType('hover_brand_light')}
            onMouseLeave={() => changeCursorType('normal_brand_light')}
            className="px-12 py-3 font-medium transition-colors border-2 rounded-full justify-self-end lg:justify-self-start text-body border-ddl_brand_light"
          >
            <div className="-mt-1">Go Back</div>
          </motion.button>
        </div>
      </motion.section>
    </>
  )
}

NotFound.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default NotFound
