import { is } from '@/is'
import { negate } from 'lodash-es'

export { createNone, None } from '@/value'

export { is }

export const not = negate(is)
