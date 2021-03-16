import React, { memo } from 'react'
import { Text } from 'react-native'
import { message } from 'helpers/getTranslation'

type TextComponentProps = {
  text: string
}
/**
 * Jira client library
 *
 * @example
 * const jira = new Jira({
 *   host: 'yourhost',
 *   user: 'jhn@doe.com',
 *   token: 'secret',
 * })
 *
 * const projects = await jira.projects()
 *
 * @see  https://developer.atlassian.com/cloud/jira/platform/rest/v3
 * @todo  implement all methods
 */
const TextComponent = memo<TextComponentProps>(({ text }) => {
  return <Text>{message(text)}</Text>
})

export default TextComponent
