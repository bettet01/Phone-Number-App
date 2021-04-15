import {useEffect, useState} from "react";
import {PhoneNumber} from "../types/PhoneNumberTypes";
import {getPhoneNumbers} from "../service/backendApi";


const useNumbers = () => {
    const [numbers, setNumbers] = useState<PhoneNumber[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        refreshPhoneNumbers();
    }, [])

    const refreshPhoneNumbers = () => {
        getPhoneNumbers().then((res) => {
            setNumbers(res.data.numbers);
            setError(null);
        }).catch(() => {
            setError("We've encountered an error. Please try again later")
        })
    }

    return {numbers, error, refreshPhoneNumbers}
}

export default useNumbers;