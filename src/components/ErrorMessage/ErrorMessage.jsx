import css from "./ErrorMessage.module.css"

export default function ErrorMessage() {
    return (
        <p className={css.errorText}>Error! Please, check the site address or reload the page!</p>
    )
}