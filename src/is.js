import { None } from '@/value'
import { is as isInstanceOf } from '@mpietrucha/is-constructor'

export const is = value => {
    return isInstanceOf(value, None)
}
