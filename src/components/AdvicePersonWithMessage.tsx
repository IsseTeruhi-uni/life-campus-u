import React from 'react';
import Image from 'next/image';
import { Box, Text } from '@mantine/core';

interface AdvicePersonWithMessageProps {
    message: string;
}

const AdvicePersonWithMessage: React.FC<AdvicePersonWithMessageProps> = ({ message }) => {
    return (
        <Box style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginTop: '5px' }}> {/* Changed alignItems to flex-start */}
            {/* SVG画像 */}
            <Box style={{ width: '20%' }}>
                <Image
                    src="/advicePerson.svg"
                    alt="Advice Person"
                    layout="responsive"
                    width={100} // 実際の比率を維持するための仮の値
                    height={130} // 上記と合わせて設定
                />
            </Box>

            {/* 吹き出し */}
            <Box
                style={{
                    position: 'relative',
                    backgroundColor: '#bfdbfe', // Mantineのテーマでカラー指定可
                    padding: '16px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    flexGrow: 1,
                    flexBasis: '80%',
                }}
            >
                {/* 吹き出し内のメッセージ */}
                <Text size="sm">{"摂取カロリーに比べて消費カロリーが少ないです。もう少し運動しましょう!!"}</Text>

                {/* 吹き出しの三角形 */}
                <Box
                    style={{
                        position: 'absolute',
                        top: '16px', // Adjusted to align with the top padding
                        left: '-8px',
                        width: 0,
                        height: 0,
                        borderTop: '8px solid transparent',
                        borderBottom: '8px solid transparent',
                        borderRight: '8px solid #bfdbfe', // 吹き出しの背景色と一致
                    }}
                />
            </Box>
        </Box>
    );
};

export default AdvicePersonWithMessage;
