"use client";
import { useState } from 'react';
import { TextInput, NumberInput, Select, Button, Container, Title, Divider } from '@mantine/core';
import { getFitbitAuthUrl } from '@/libs/fitbit/auth';
import useFitbitSession from '@/hooks/use-fitbit-session';
import { signOutWithGoogle } from '@/libs/firebase/auth';
import { removeSession } from '@/actions/auth-actions';

export default function UserProfile() {
    const [name, setName] = useState('');
    const [age, setAge] = useState<number | undefined>(undefined);
    const [gender, setGender] = useState('');
    const { isFitbitAuthenticated } = useFitbitSession();
    const handleSignOut = async () => {
        await signOutWithGoogle();
        await removeSession();
    };

    return (
        <Container>
            <Title order={2}>プロフィール編集</Title>
            <TextInput
                label="氏名"
                placeholder="氏名を入力"
                value={name}
                onChange={(event) => setName(event.currentTarget.value)}
                required
            />
            <NumberInput
                label="年齢"
                placeholder="年齢を入力"
                value={age}
                onChange={(value) => setAge(typeof value === 'number' ? value : undefined)}
                required
            />
            <Select
                label="性別"
                placeholder="性別を選択"
                data={['男性', '女性', 'その他']}
                value={gender}
                onChange={(value) => value !== null && setGender(value)}
                required
            />
            <Button
                fullWidth
                mt="md"
                onClick={() => {
                    // Add your save profile logic here
                    console.log('プロフィール保存');
                }}
            >
                プロフィール保存
            </Button>

            <Divider my="lg" />

            {!isFitbitAuthenticated && (
                <>
                    <Title order={2}>Fitbit 連携</Title>
                    <Button
                        fullWidth
                        mt="md"
                        onClick={() => {
                            const url = getFitbitAuthUrl();
                            window.location.href = url;
                        }}
                        variant="outline"
                    >
                        Fitbit 連携
                    </Button>
                </>
            )}
            <Divider my="lg" />
            <Title order={2}>ログアウト</Title>

            <Button
                fullWidth
                mt="md"
                color="red"
                onClick={handleSignOut}
            >
                ログアウト
            </Button>
        </Container>
    );
};


