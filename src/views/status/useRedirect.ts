import { useMenuNavigation } from "/@/components/MenuSileBar/useHook";

export const useRedirect = () => {
    const {handleNavigation}= useMenuNavigation();

    const goListStatus = () => {
        handleNavigation("/status")
    }
    const goCreateStatus = () => {
        handleNavigation("/status/add")
    }
    const goDetailStatus = (id: string) => {
        handleNavigation(`/status/view/${id}`)
    }
    const goUpdateStatus = (id: string) => {
        handleNavigation(`/status/edit/${id}`)
    }

    return {
        goListStatus,
        goCreateStatus,
        goDetailStatus,
        goUpdateStatus
    }
}