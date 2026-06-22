import { Card, CardHeader, Skeleton, SkeletonItem } from '@fluentui/react-components';

const placeholders = ['trip-skeleton-1', 'trip-skeleton-2', 'trip-skeleton-3'];

type SkeletonTextProps = {
  width: number;
  height: number;
};

export const SkeletonText = ({ width, height }: SkeletonTextProps) => (
  <Skeleton>
    <SkeletonItem style={{ width, height }} />
  </Skeleton>
);

export const TripsSkeleton = () => (
  <>
    {placeholders.map((placeholder) => (
      <Card key={placeholder}>
        <CardHeader
          header={<SkeletonText width={200} height={24} />}
          description={<SkeletonText width={300} height={16} />}
        />
      </Card>
    ))}
  </>
);
