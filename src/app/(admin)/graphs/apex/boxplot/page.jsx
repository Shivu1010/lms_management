'use client';

import ComponentCard from '@/components/cards/ComponentCard';
import ApexChartClient from '@/components/client-wrapper/ApexChartClient';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Col, Container, Row } from 'react-bootstrap';
import { getBasicBoxplotChart, getHorizontalBoxplotChart, getScatterBoxplotChart } from './data';
const Page = () => {
  return <Container fluid>
      <PageBreadcrumb title="Boxplot Apexchart" subtitle="Charts" />
      <Row>
        <Col xs={6}>
          <ComponentCard title="Basic Boxplot">
            <ApexChartClient getOptions={getBasicBoxplotChart} series={getBasicBoxplotChart().series} type="boxPlot" height={350} />
          </ComponentCard>
        </Col>
        <Col xs={6}>
          <ComponentCard title="Basic Boxplot">
            <ApexChartClient getOptions={getScatterBoxplotChart} series={getScatterBoxplotChart().series} type="boxPlot" height={350} />
          </ComponentCard>
        </Col>
        <Col xs={6}>
          <ComponentCard title="Horizontal BoxPlot">
            <ApexChartClient getOptions={getHorizontalBoxplotChart} series={getHorizontalBoxplotChart().series} type="boxPlot" height={350} />
          </ComponentCard>
        </Col>
      </Row>
    </Container>;
};
export default Page;