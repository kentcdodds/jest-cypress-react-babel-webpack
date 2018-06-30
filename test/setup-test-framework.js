// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import 'react-testing-library/cleanup-after-each'

// this adds jest-dom's custom assertions
import 'jest-dom/extend-expect'

// add jest-emotion serializer
import {createSerializer} from 'jest-emotion'
import * as emotion from 'emotion'

expect.addSnapshotSerializer(createSerializer(emotion))
