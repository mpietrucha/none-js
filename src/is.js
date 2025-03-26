import { None } from '@/none'
import { useNegate } from '@mpietrucha/function'
import { isInstanceOf } from '@mpietrucha/is-constructor'

export const is = value => {
    return isInstanceOf(value, None)
}

export const not = useNegate(is)
