import { ChunkExtractor } from '@loadable/server'
import { statsPath } from './constants'

const path = require('path')
const statsFile = path.resolve(statsPath)
const extractor = new ChunkExtractor({ entrypoints: ['main'], statsFile });

export const wrapRootElement = ({ element }) => extractor.collectChunks(element);
