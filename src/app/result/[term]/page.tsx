import Gallery from '@/app/components/Gallery'

type Props = {
    params: {
        term: string
    },
    searchParams: string
}

export function generateMetadata({ params: { term }, searchParams }: Props) {
    console.log('searchParams', searchParams);

    return {
        title: `result for ${term}`,
    }
}

export default function page({ params: { term } }: Props) {
    return (
        <Gallery topic={term} />
    )
}
