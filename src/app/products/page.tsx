import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import ProductReel from "@/components/ProductReel"
import { PRODUCT_CATEGORIES } from "@/config"

type Param = string | string[] | undefined

interface ProductPageProps{
    searchParams: {[key: string]: Param}
}

const parse = (param: Param) => {
    return typeof param == "string" ? param : undefined
}

const ProdctPage = ({searchParams}: ProductPageProps) => {
    const sort = parse(searchParams.sort)
    const category = parse(searchParams.category)

    const lable = PRODUCT_CATEGORIES.find(({value}) => value === category)?.label

    return(
        <MaxWidthWrapper>
            <ProductReel title={lable ?? "Browse Quality assets"} query={{category, limit: 40, sort: sort === "desc" || sort === "asc" ? sort : undefined}}/>
        </MaxWidthWrapper>
    )
}

export default ProdctPage