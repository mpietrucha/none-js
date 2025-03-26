import { None } from '@/none'
import { isInstanceOf } from '@mpietrucha/is-constructor'
import { negate } from 'lodash-es'

export const is = value => {
    return isInstanceOf(value, None)
}

export const not = negate(is)
