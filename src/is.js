import { None } from '@/none'
import { isConstructor } from '@mpietrucha/is-constructor'
import { negate } from 'lodash-es'

export const is = value => {
    return isConstructor(value, None)
}

export const not = negate(is)
