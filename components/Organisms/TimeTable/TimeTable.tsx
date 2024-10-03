import { AspectRatio, Badge, Card, Flex, Table, Text } from '@mantine/core';

export function TimeTableCell(
  props: { name?: string; room?: string; color?: string; isVisible?: boolean } = {
    name: 'コンピュータ基礎',
    room: '講605',
    color: 'blue',
    isVisible: false,
  }
) {
  const visibilityStyle = props.isVisible ? { display: 'flex' } : { display: 'none' };
  return (
    <AspectRatio ratio={3 / 5} style={{ maxHeight: '20%' }}>
      <Card radius="xs" style={visibilityStyle}>
        <Flex direction="column" justify="space-between" style={{ height: '100%' }}>
          <Card.Section>
            <Text style={{ margin: '5%' }}>{props.name}</Text>
          </Card.Section>
          <Card.Section>
            <Badge size="lg" radius="xs" color={props.color} style={{ width: '100%' }}>
              <Text>{props.room}</Text>
            </Badge>
          </Card.Section>
        </Flex>
      </Card>
    </AspectRatio>
  );
}

export function TimeTableDisplay(props: { courseData: any }) {
  const week = ['mon', 'tue', 'wed', 'thu', 'fri'];
  const time = ['1', '2', '3', '4', '5'];
  return (
    <Table
      horizontalSpacing={4}
      verticalSpacing={4}
      withTableBorder={false}
      withColumnBorders={false}
      withRowBorders={false}
      striped="even"
    >
      <Table.Thead>
        <Table.Tr>
          <Table.Th />
          {week.map((day) => (
            <Table.Th key={day}>
              <Text style={{ textAlign: 'center' }}>{day}</Text>
            </Table.Th>
          ))}
        </Table.Tr>

        {time.map((i) => (
          <>
            <Table.Tr>
              <Table.Td>
                <Text key={i} style={{ textAlign: 'center' }}>
                  {i}
                </Text>
              </Table.Td>
              <Table.Td key={i}>
                {props.courseData.course[0][i].name !== undefined && (
                  <>
                    <TimeTableCell
                      name={props.courseData.course[0][0].name}
                      room={props.courseData.course[0][0].room}
                      color="blue"
                      isVisible
                    />
                  </>
                )}
              </Table.Td>
            </Table.Tr>
          </>
        ))}
      </Table.Thead>
    </Table>
  );
}
