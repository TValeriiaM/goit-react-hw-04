import css from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({ onClick }) {
    return (
        <button className={css.loadMoreBtn} type="submit" onClick={onClick}>Load more</button>
    )
}