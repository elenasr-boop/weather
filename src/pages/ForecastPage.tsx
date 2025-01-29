import { useParams } from "react-router-dom"
import { firstLetterinUpperCase } from "../utils";

export function ForecastPage () {
    const {place} = useParams();

    return (
        <>It's forecast page for {firstLetterinUpperCase(place!)}</>
    )
}