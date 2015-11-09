import {
	some
,	map
,	fill
,	find
,	get
,	has
} from './array-non-mutative'

import {
	indexes
,	reindex
,	findIndex
,	findIndexes
,	addIndex
} from './array-indexes';

import {
	concat
,	filter
,	forEach
,	transform
,	pop
,	push
,	reverse
,	shift
,	slice
,	sort
,	splice
,	unshift
,	remove
,	set
,	replace
,	setMany
,	removeMany
,	findMany
,	fromJson
} from './array-mutative'

export const immutableMethods = {
	some
,	map
,	fill
,	find
,	get
,	has

,	findIndex
,	findIndexes
,	reindex
,	indexes
,	addIndex
}

export const mutableMethods = {
	concat
,	filter
,	forEach
,	transform
,	pop
,	push
,	reverse
,	shift
,	slice
,	sort
,	splice
,	unshift
,	remove
,	set
,	replace
,	setMany
,	removeMany
,	findMany
,	fromJson
}

export const allMethods = {
	some
,	map
,	fill
,	find
,	get
,	has

,	indexes
,	reindex
,	findIndex
,	findIndexes
,	addIndex

,	concat
,	filter
,	forEach
,	transform
,	pop
,	push
,	reverse
,	shift
,	slice
,	sort
,	splice
,	unshift
,	remove
,	set
,	replace
,	setMany
,	removeMany
,	findMany
,	fromJson
}


export const immutableMethodsKeys = Object.keys(immutableMethods);
export const mutableMethodsKeys = Object.keys(mutableMethods);