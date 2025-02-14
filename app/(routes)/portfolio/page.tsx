import { dataPortfolio } from "@/data"
import TransitionPage from "@/components/transition-page"
import ContainerPage from "@/components/container"
import PortfolioBox from "@/components/portfolio-box"

const PortfolioPage = () => {
  return (
    <ContainerPage>
      <TransitionPage />
      <div className="flex min-h-screen flex-col py-12 md:py-16">
        <h1 className="mb-8 text-center text-3xl leading-tight md:mb-12 md:text-5xl">
          Mis últimos <span className="font-bold text-secondary">trabajos realizados</span>
        </h1>

        <div className="relative z-10 mx-auto grid w-full max-w-[1600px] gap-6 px-2 md:grid-cols-2 md:gap-8 md:px-4 lg:px-6">
          {dataPortfolio.map((data) => (
            <PortfolioBox key={data.id} data={data} />
          ))}
        </div>
      </div>
    </ContainerPage>
  )
}

export default PortfolioPage

