<template>
  <v-card
    class="mx-auto"
    max-width="750"
    outlined
  >
    <v-card-text>
      <div
        v-if="texts[section].subtitle"
        class="subtitle text-center"
      >
        {{ texts[section].subtitle }}
      </div>
      <div
        v-if="texts[section].title"
        class="my-2 title text-center"
        style="font-weight: bold; color: black"
      >
        {{ texts[section].title }}
      </div>
      <div
        v-if="texts[section].description"
        class="body-2 text-center"
      >
        <span
          v-for="(item, key) in texts[section].description"
          :key="`desc${key}`"
        >
          {{ item }}<br />
        </span>
      </div>
      <div
        class="my-4 text-center"
        :class="content[ctnPage].isBox ? 'content-box' : ''"
        :style="!isPlaying && content[ctnPage].audio ? 'cursor: pointer' : 'cursor: default'"
        @click="!isPlaying ? tabCard() : 'disabled'"
      >
        <div
          class="title"
          style="font-size: 1.9em !important; color: black;"
        >
          {{ content[ctnPage].title }}
          <v-btn
            v-if="content[ctnPage].audio"
            icon
            color="green"
            style="position: absolute !important;"
            :disabled="isPlaying"
            @click="tabCard()"
          >
            <v-icon>mdi-volume-high</v-icon>
          </v-btn>
          <span
            v-if="content[ctnPage].subtitle"
            class="body-1"
          >
            <br />{{ content[ctnPage].subtitle }}
          </span>
          <v-row
            v-if="content[ctnPage].examples"
            style="font-size: 0.8em !important"
          >
            <v-col
              v-for="(item, key) in content[ctnPage].examples"
              :key="`ex${key}`"
            >
              {{ item.word }}<br />
              {{ item.def }}
            </v-col>
          </v-row>
        </div>
        <div class="my-1 body-2">
          <span
            v-for="(item, key) in content[ctnPage].description"
            :key="`content${key}`"
          >
            {{ item }}<br />
          </span>
        </div>
      </div>
      <Textbox
        :value="content[ctnPage].textbox[parseInt((condition - 1) / 2)][page]"
        :delay="1500"
        :response="!isTab ? 1000 : 500"
      />
      <div
        class="px-3 py-5 body-1 text-center"
      >
        <div style="width: 40%; margin: 0 auto">
          <v-img
            :src="require('@/assets/noah.png')"
          />
        </div>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        v-if="isTab"
        block
        color="primary"
        :disabled="disabled || isPlaying"
        @click="next()"
      >
        {{ content[ctnPage].button }}
        {{ countDown > 0 ? `(${countDown})` : '' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
/* eslint-disable radix */
import Textbox from './components/Textbox.vue';

export default {
  components: {
    Textbox,
  },
  data: () => ({
    isCounting: true,
    isPlaying: false,
    isTab: false,
    file: '',
    page: 0,
    ctnPage: 0,
    countDown: 5,
    texts: [
      { // Practice Main
        subtitle: 'Practice 1',
        title: '철자부호',
        description: [
          '기본 알파벳 중 모음을 바탕으로,',
          '악상 떼귀, 악상 씨콩플렉스, 그하브의',
          '발음을 배웁니다.',
        ],
        contents: [
          {
            title: 'e é è ê',
            button: '다음',
            isBox: true,
            textbox: [
              [ // Condition 1 & 2
                [
                  '이번건 e 모음을 가르쳐 주나봐!',
                ],
                [
                  'e는 영어단어에서도 많이 나오는 모음인데,',
                  '단어 위에 있는 점들은 어떻게 소리내는걸까?',
                ],
                [
                  '너는 어떻게 생각해?',
                  '한 번 생각해보자!',
                ],
                [
                  '준비됐으면',
                  '아래의 버튼을 눌러줘!',
                ],
              ],
              [ // Condition 3 & 4
                [
                  '이번 시간에는 모음 발음을 배워볼게요.',
                ],
                [
                  'e는 영어단어에서도 많이 나오는 모음인데,',
                  '단어 위의 점들은 다양한 소리를 냅니다.',
                ],
                [
                  '준비됐으면',
                  '아래의 버튼을 눌러주세요.',
                ],
              ],
            ],
            active: true,
          },
        ],
      },
      { // Practice 1-1
        title: 'Practice 1-1',
        description: [
          '발음 및 단어를 누르면 발음을 들을 수 있어요',
        ],
        contents: [
          {
            title: 'e',
            description: [
              '[ə][ɛ]',
              '\'e\'의 기본 발음',
              '\'으\', \'에\' 또는 \'애\'로 발음',
            ],
            textbox: [
              [ // Condition 1 & 2
                [
                  '음.. 이 단어에는 발음이 몇개 있는거야?',
                ],
                [
                  '아! 두 개 있는거구나.',
                ],
                [
                  '어떤 때에 쓰는걸까?',
                  '하나는 \'으\', 하나는 \'에\'',
                  '라고 하는 것 같아.',
                ],
                [
                  '\'다음\'버튼을 눌러서',
                  '자세한 설명을 보자.',
                ],
              ],
              [ // Condition 3 & 4
                [
                  '이 단어는 두 개의 발음을',
                  '가지고 있어요.',
                  '하나는 \'으\', 하나는 \'에\'로 발음해요.',
                ],
                [
                  '다음 버튼을 눌러서',
                  '자세한 설명을 봅시다.',
                ],
              ],
            ],
            button: '다음',
            isBox: true,
            active: false,
            audio: 'e',
          },
          {
            title: 'e',
            description: [
              'e[ə]는 단어 끝이나 글자',
              '사이에서 발음하며, e[ɛ]는',
              '발음되는 자음 앞, 연속되는',
              '두개의 자음 앞에서 사용',
            ],
            textbox: [
              [
                [
                  '음... 설명을 봐도',
                  '뭐가 다른지 모르겠어.',
                ],
                [
                  'e[ə]는 대체로 앞만 아니면',
                  '발음한다는건 알겠는데,',
                  '아직 e[ɛ]는 이해가 안가..',
                ],
                [
                  '우리 단어랑 같이 들어보면',
                  '더 잘 알 수 있지 않을까?',
                ],
                [
                  '\'다음\' 버튼을 눌러서',
                  '단어랑 같이 들어보자!',
                ],
              ],
              [
                [
                  '설명을 보면 조금 어려울 수 있어요.',
                  '단어와 함께 들어보면서',
                  '감을 익혀봅시다.',
                ],
                [
                  '\'다음\' 버튼을 눌러주세요.',
                ],
              ],
            ],
            button: '다음',
            isBox: true,
            active: true,
            audio: 'e',
          },
        ],
      },
      { // Practice 1-1 (2)
        title: 'Practice 1-1',
        description: [
          '발음 및 단어를 누르면 발음을 들을 수 있어요',
        ],
        contents: [
          {
            title: 'e [ə]',
            examples: [
              {
                word: 'menu',
                def: '메뉴',
              },
              {
                word: 'classe',
                def: '수업',
              },
              {
                word: 'petit',
                def: '작은',
              },
            ],
            textbox: [
              [
                [
                  '위의 카드를 눌러서 소리를 들려줘!',
                ],
                [
                  '단어만 봐서는 잘 몰랐는데,',
                  '들어보니까 어떻게 말하는지 알겠다!',
                ],
                [
                  '이 발음은 확실히 알겠어..!',
                  '너는 어때? 잘 이해가 가?',
                ],
                [
                  '다음으로 넘어가보자.',
                ],
              ],
              [
                [
                  '위의 카드를 눌러서 소리를 들어봅시다.',
                ],
                [
                  '단어들을 들어보면 어떻게 말하는지',
                  '감을 익힐 수 있어요.',
                ],
                [
                  '반복해서 들어본 후 이해가 가면',
                  '다음으로 넘어가 봅시다.',
                ],
              ],
            ],
            button: '다음',
            isBox: true,
            active: false,
            audio: 'e-voca1',
          },
        ],
      },
      { // Practice 1-1 (3)
        title: 'Practice 1-1',
        description: [
          '발음 및 단어를 누르면 발음을 들을 수 있어요',
        ],
        contents: [
          {
            title: 'e [ɛ]',
            examples: [
              {
                word: 'avec',
                def: '함께',
              },
              {
                word: 'merci',
                def: '감사',
              },
              {
                word: 'reste',
                def: '나머지',
              },
            ],
            textbox: [
              [
                [
                  '위의 카드를 눌러서 소리를 들려줘!',
                ],
                [
                  '여기있는 단어들은 \'에\'라고 발음하네.',
                  '어떤 규칙을 말하는지 이해가 가?',
                ],
                [
                  '글을 읽어봐도 좀 어려운 것 같아.',
                  '혼란스럽다...',
                ],
                [
                  '너는 어때?',
                  '하나는 지금은 좀 어려우니까',
                  '다음에 다시 한 번 알아보는게 어때?',
                  '또 기회가 있을거야.',
                ],
                [
                  '\'다음\' 버튼을 눌러서',
                  '다음 발음도 한 번 알아보자.',
                ],
              ],
              [
                [
                  '위의 카드를 눌러서 소리를 들어봅시다.',
                ],
                [
                  '여기있는 단어들은 \'에\'라고 발음합니다.',
                ],
                [
                  '이번 시간에는 \'e\' 단어의 감을 가볍게 익히고',
                  '다음 시간에 더 자세히 배워 봅시다.',
                ],
                [
                  '\'다음\' 버튼을 눌러서',
                  '다음 발음도 알아보겠습니다.',
                ],
              ],
            ],
            button: '다음',
            isBox: true,
            active: false,
            audio: 'e-voca2',
          },
        ],
      },
      { // Practice 1-2
        title: 'Practice 1-2',
        description: [
          '발음 및 단어를 누르면 발음을 들을 수 있어요',
        ],
        contents: [
          {
            title: 'é',
            subtitle: '악성 떼귀',
            description: [
              '영어의 [e]와 비슷한 발음',
            ],
            textbox: [
              [
                [
                  '불어를 보다보면 위에 점이',
                  '있는 단어를 많이 본 것 같아.',
                  '소리를 들어보고 싶어! 글자를',
                  '눌러줄래?',
                ],
                [
                  '오~ 들어보니까, 우리 발음의',
                  '\'에\'랑 비슷하다',
                ],
                [
                  '그리고 \'e\' 말고도',
                  '악성 떼귀가 있는지 궁금해',
                  '\'다음\'버튼을 눌러서 알아보자.',
                ],
              ],
              [
                [
                  '불어에는 모음 위에',
                  '점이 있는 단어들이 많아요.',
                  '소리를 들어보려면',
                  '글자를 눌러주세요.',
                ],
                [
                  '들어보면 우리 발음의',
                  '\'에\'랑 비슷하죠.',
                ],
                [
                  '\'e\' 말고도 악성 떼귀가',
                  '있는지 알아볼까요?',
                  '\'다음\'버튼을 눌러서',
                  '확인해 봅시다.',
                ],
              ],
            ],
            button: '다음',
            isBox: true,
            active: false,
            audio: 'e-aigue',
          },
          {
            title: 'é [e]',
            subtitle: '악성 떼귀',
            description: [
              '악성 떼귀는 e에만 해당되며,',
              '단어 위치 구분 없이 모두 [e]로',
              '발음한다. 한국어의 [에]와 유사',
            ],
            textbox: [
              [
                [
                  '위의 카드를 눌러서 소리를 들려줘!',
                ],
                [
                  '아하. 악성 떼귀는 e만 있구나!',
                  '아까의 e랑 다르게,',
                  '모든 곳에서 똑같이 발음하나봐.',
                ],
                [
                  '단어에서 어떻게 쓰는지',
                  '궁금한데 한 번 들어보자!',
                ],
                [
                  '‘다음’을 눌러줘.',
                ],
              ],
              [
                [
                  '위의 카드를 눌러서 소리를 들어봅시다.',
                ],
                [
                  '악성 떼귀는 e만 있어요. 모든 곳에서',
                  '똑같이 발음해주면 된답니다.',
                ],
                [
                  '단어에서 어떻게 쓰는지 알아볼까요?',
                  '\'다음\'을 눌러주세요.',
                ],
              ],
            ],
            button: '다음',
            isBox: true,
            active: false,
            audio: 'e-aigue',
          },
        ],
      },
      { // Practice 1-2 (2)
        title: 'Practice 1-2',
        description: [
          '발음 및 단어를 누르면 발음을 들을 수 있어요',
        ],
        contents: [
          {
            title: 'étoile',
            subtitle: '별',
            textbox: [
              [
                [
                  '위의 카드를 눌러서 소리를 들려줘!',
                ],
                [
                  '에뚜왈, 이렇게 발음하는구나!',
                  '단어를 들으니까 더 잘 알겠다.',
                ],
              ],
              [
                [
                  '위의 카드를 눌러서 소리를 들어봅시다.',
                ],
                [
                  '에뚜왈, 이렇게 발음하는거에요.',
                ],
              ],
            ],
            button: '다음',
            isBox: true,
            active: false,
            audio: 'etoile',
          },
        ],
      },
      { // Practice 1-2 (3)
        title: 'Practice 1-2',
        description: [
          '발음 및 단어를 누르면 발음을 들을 수 있어요',
        ],
        contents: [
          {
            title: 'étude',
            subtitle: '연습곡',
            textbox: [
              [
                [
                  '위의 카드를 눌러서 소리를 들려줘!',
                ],
                [
                  '에튜드, 이건 우리가 많이 들어본 단어같아',
                  '이 단어랑 발음을 한꺼번에 외워보는게 어때?',
                ],
                [
                  '그럼 발음기호를 어떻게',
                  '발음하는지 잘 기억 나더라구.',
                ],
              ],
              [
                [
                  '위의 카드를 눌러서 소리를 들어봅시다.',
                ],
                [
                  '에튜드, 이렇게 발음할 수 있어요.',
                ],
              ],
            ],
            button: '다음',
            isBox: true,
            active: false,
            audio: 'etude',
          },
        ],
      },
      { // Practice 1-2 (4)
        title: 'Practice 1-2',
        description: [
          '발음 및 단어를 누르면 발음을 들을 수 있어요',
        ],
        contents: [
          {
            title: 'étudier',
            subtitle: '공부하다',
            textbox: [
              [
                [
                  '위의 카드를 눌러서 소리를 들려줘!',
                ],
                [
                  '이 단어는 영어의 ‘study’랑 생긴게 비슷하네',
                ],
                [
                  '아참, \'e\'는 옛날에 불어에서',
                  '\'s\'를 대체하는 단어였대.',
                  '그래서 이렇게 쓰나봐.',
                ],
                [
                  '그렇게 보니까, é를 s로 연상해서',
                  '단어를 보니까 영어랑 더 비슷하게',
                  '느껴져서 잘 외워질 것 같아.',
                ],
                [
                  '잘 이해가 됐어?',
                  '그럼 \'다음\'으로 넘어가보자!',
                ],
              ],
              [
                [
                  '위의 카드를 눌러서 소리를 들어봅시다.',
                ],
                [
                  '이 단어는 영어의 \'study\'랑 생긴게 비슷하죠?',
                ],
                [
                  '아참, \'e\'는 옛날에 불어에서',
                  '\'s\'를 대체하는 단어였어요.',
                ],
                [
                  '잘 이해가 되었으면',
                  '\'다음\'으로 넘어갑시다.',
                ],
              ],
            ],
            button: '다음',
            isBox: true,
            active: false,
            audio: 'etudier',
          },
        ],
      },
      { // Practice 1-3
        title: 'Practice 1-3',
        description: [
          '발음 및 단어를 누르면 발음을 들을 수 있어요',
        ],
        contents: [
          {
            title: 'è',
            subtitle: '악성 그하브',
            description: [
              '낮은 음',
              '단어의 뜻 구분을 위해 사용',
            ],
            textbox: [
              [
                [
                  '봐봐. 이건 밑으로 내려오는 점이네!',
                  '그래서 낮은 음을 낸다고 말하는건가?',
                  '그러면 어떤 소리를 내는지 한 번 들어보자.',
                ],
                [
                  '이것도 \'에\'의 음을 가지고 있네.',
                  '아까 배웠던 악성 떼귀랑',
                  '다르진 않은 것 같아.',
                ],
                [
                  '조금 더 낮은 느낌이야.',
                  '그냥 단어 구분 때문에',
                  '다르게 쓰는건가?',
                ],
                [
                  '이 \'e\'만 악성 그하브일까?',
                  '너의 의견도 궁금해!',
                ],
              ],
              [
                [
                  '자, 잘 보세요. 이 \'e\'는 악성 떼귀와 달리',
                  '밑으로 내려오는 점이죠? 이 악성 그하브는',
                  '낮은 음을 냅니다. 그러면 어떤 소리를',
                  '내는지 한 번 들어볼까요?',
                ],
                [
                  '이것도 \'에\'의 음을 가지고 있습니다.',
                  '아까 배웠던 악성 떼귀와 다르지 않아요',
                ],
                [
                  '조금 더 낮게 발음합니다.',
                ],
                [
                  '자, \'다음\'버튼을 눌러',
                  '악성 그하브에 대해 더 배워봅시다.',
                ],
              ],
            ],
            button: '다음',
            isBox: true,
            active: false,
            audio: 'e-grave',
          },
          {
            title: 'à, è, ù',
            subtitle: '악성 그하브',
            description: [
              '낮은 음',
              'a, e, u 에만 사용하며,',
              '단어의 뜻 구분을 위해 사용',
            ],
            textbox: [
              [
                [
                  '아! 악성 그하브는 a, e, u에',
                  '쓰는구나. 이것들도 다 어떻게',
                  '소리를 내는지 궁금해',
                  '소리를 들려줘!',
                ],
                [
                  'a랑 e는 익숙한 발음인 것 같은데,',
                  'u는 묘한 소리가 나.',
                ],
                [
                  '중국어 같기도 하고..',
                  '이것도 여러 발음이 있을 것 같아.',
                  '그냥 \'u\'의 발음도 궁금하네!',
                ],
                [
                  '보니까 u 말고는 아까 악상 떼귀랑',
                  '소리가 거의 같아!',
                ],
                [
                  '발음이 더 많아지면 헷갈리겠는데..?',
                  '아까 e 랑은 또 다르고.. ',
                  '정확하게 짚고 넘어가야겠다!',
                ],
                [
                  '충분히 들었으면 다음으로 넘어갈까?',
                ],
              ],
              [
                [
                  '악성 그하브는 a, e, u 세 모음에서 쓰입니다',
                  '모두 어떻게 소리를 내는지 들어봅시다.',
                ],
                [
                  'a와 e는 좀 익숙하게 들을 수 있지만,',
                  'u는 여러가지 발음이 있답니다.',
                ],
                [
                  '충분히 들었으면 다음으로 넘어가 볼까요?',
                ],
              ],
            ],
            button: '다음',
            isBox: true,
            active: false,
            audio: 'eau-grave',
          },
        ],
      },
      { // Practice 1-4
        title: 'Practice 1-4',
        description: [
          '발음 및 단어를 누르면 발음을 들을 수 있어요',
        ],
        contents: [
          {
            title: 'ê',
            subtitle: '악성 씨콩플렉스',
            description: [
              '철자 위의 굽은 꺾쇠모양',
            ],
            textbox: [
              [
                [
                  '이 꺾은 모양은 왠지 발음하기',
                  '어려울 것 같은데… 어떨 것 같아?',
                  '한 번 들어보자!',
                ],
                [
                  '들어보니까, 여기는 \'으\'하고 \'어\'랑',
                  '유사한 발음이다. 잘 모르겠으면 여러번',
                  '듣고 한 번 따라해보자! 이 발음도',
                  'e 말고도 여러 발음이 있을까?',
                ],
                [
                  '그럼, \'다음\' 버튼을 눌러줘!',
                ],
              ],
              [
                [
                  '이 꺾은 모양도 발음을 한 번 들어봅시다.',
                ],
                [
                  '이 발음은 \'으\'와 \'어\'와 유사한 발음이에요.',
                  '여러번 듣고 한 번 따라해 봅시다.',
                ],
                [
                  '그럼, \'다음\' 버튼을 눌러주세요.',
                ],
              ],
            ],
            button: '다음',
            isBox: true,
            active: false,
            audio: 'e-circonflexe',
          },
          {
            title: 'â, ê, î, ô, û',
            subtitle: '악성 씨콩플렉스',
            description: [
              '특별한 발음없이 단어의',
              '구분을 위해 사용',
            ],
            textbox: [
              [
                [
                  '위의 카드를 눌러서 소리를 들려줘!',
                ],
                [
                  '아하~ 이 글자가 있냐 없냐에 따라서',
                  '단어의 의미가 달라질 수 있구나!',
                  '그래서 단어 구분을 위해서 사용하나봐.',
                ],
                [
                  'tete와 tête은 다른 뜻을 가지고 있대.',
                  '같은 단어라도 꺾쇠가 있으면',
                  '뜻에 유의하는걸로 하자!',
                ],
                [
                  '다 이해했으면 다음으로 넘어가보자.',
                ],
              ],
              [
                [
                  '위의 카드를 눌러서 소리를 들어봅시다.',
                ],
                [
                  '이 글자가 있냐 없냐에 따라서',
                  '단어의 의미가 달라질 수 있어요.',
                  '그래서 단어 구분을 위해서 사용한답니다.',
                ],
                [
                  'tete와 tête은 다른 뜻을 가지고 있어요.',
                  '같은 단어라도 꺾쇠가 있으면',
                  '뜻에 유의해 주세요.',
                ],
                [
                  '다 이해했으면 다음으로 넘어가봅시다.',
                ],
              ],
            ],
            button: '다음',
            isBox: true,
            active: false,
            audio: 'aeiou-circonflexe',
          },
        ],
      },
      { // Practice 1 (Complete)
        title: '철자부호',
        subtitle: 'Practice 1',
        contents: [
          {
            title: 'Toutes nos félicitations!',
            description: [
              '축하합니다!',
              '오늘 공부를 완료했어요.',
            ],
            textbox: [
              [
                [
                  '와! 오늘의 공부 끝! 어땠어? 오늘',
                  '공부가 즐거운 시간이었으면',
                  '좋겠다.',
                ],
              ],
              [
                [
                  '와! 오늘의 공부를 완료했네요!',
                  '오늘 공부가 즐거운 시간이었기를 바랍니다.',
                ],
              ],
            ],
            button: '다음',
            isBox: false,
            active: true,
          },
          {
            title: 'Toutes nos félicitations!',
            description: [
              '축하합니다!',
              '오늘 공부를 완료했어요.',
            ],
            textbox: [
              [
                [
                  '이제 오늘 공부한걸',
                  '바탕으로 단어공부도 해보자!',
                  '준비됐으면 ’준비됐어’를 눌러줘.',
                ],
              ],
              [
                [
                  '이제 오늘 공부한걸',
                  '바탕으로 단어공부도 해봅시다!',
                  '준비됐으면 ’준비됐어’를 눌러주세요.',
                ],
              ],
            ],
            button: '준비됐어',
            isBox: false,
            active: true,
          },
        ],
      },
    ],
  }),

  computed: {
    disabled() {
      return this.countDown > 0;
    },

    condition() {
      return this.$store.state.data.experimentType;
    },

    section() {
      return Number(this.$route.query.section) || 0;
    },

    content() {
      return this.texts[this.section].contents;
    },
  },

  mounted() {
    this.initTab();
    this.countDownTimer();
  },

  methods: {
    initTab() {
      this.isTab = this.content[this.ctnPage].active; // audio가 없는 section일 경우 자동으로 isTab = true
    },

    submit() {
      this.$router.history.push({ name: 'Main' });
    },

    countDownTimer() {
      if (this.countDown > 0 && this.isCounting) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      }
    },

    tabCard() {
      if (this.content[this.ctnPage].audio && !this.isPlaying) {
        this.playAudio(this.content[this.ctnPage].audio);
        // eslint-disable-next-line radix
        if (!this.page
          && this.content[this.ctnPage].textbox[parseInt((this.condition - 1) / 2)][1]) {
          this.page = 1;
        }
        if (!this.isTab) {
          this.isTab = true;
          this.isCounting = false;
          setTimeout(() => {
            this.resetCount(3);
          }, 500);
        }
      }
    },

    resetCount(countDown) {
      this.isCounting = true;
      this.countDown = countDown;
      this.countDownTimer();
    },

    playAudio(file) {
      this.file = file;

      const audio = document.getElementById(this.file);
      try {
        audio.play();
        audio.onplaying = () => {
          this.isPlaying = true;
        };
        audio.onended = () => {
          this.isPlaying = false;
        };
      } catch (e) {
        console.log(e);
      } finally {
        this.isPlaying = false;
      }
    },

    routeNextSection() {
      if (this.section === this.texts.length - 1) {
        this.submit();
      } else {
        this.$router.history.push({ name: 'Practice', query: { section: this.section + 1 } });
      }
    },

    next() {
      // eslint-disable-next-line radix
      if (this.page < this.content[this.ctnPage]
        .textbox[parseInt((this.condition - 1) / 2)].length - 1) {
        this.page += 1;
        this.resetCount(3);
      } else if (this.ctnPage < this.content.length - 1) {
        this.page = 0;
        this.ctnPage += 1;
        this.initTab();
        this.resetCount(3);
      } else {
        this.routeNextSection();
      }
    },
  },
};
</script>
<style>
.content-box {
  margin: 0 auto;
  border: 3px solid #ccc;
  border-radius: 5px;
  min-height: 60px;
  max-width: 280px;
  padding: 10px;
}
</style>
