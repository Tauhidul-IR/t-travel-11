import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-T-Travel`;
    }, [title])
}

export default useTitle;