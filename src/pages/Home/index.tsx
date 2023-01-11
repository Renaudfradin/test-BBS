import React, { useMemo } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import HomeTemplate, { HomeTemplateProps } from '../../templates/Home'

const DashboardPage: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()

  const templateProps: HomeTemplateProps = useMemo(
    () => ({
      title: t('hello', { name: 'Name' }),
    }),
    [t]
  )

  return <HomeTemplate {...templateProps} />
}

export default DashboardPage
