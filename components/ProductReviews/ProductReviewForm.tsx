import {
  Flex,
  Textarea,
  FormControl,
  FormLabel,
  RadioGroup,
  Stack,
  Radio,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useState, useRef } from 'react'

import { BrandButton } from '../../components/Button/Button'

interface ProductReviewFormProps {
  onSubmitReview: (rateValue: string, reviewValue: string) => void
  isLoading: boolean
}

const ProductReviewForm = ({ onSubmitReview, isLoading }: ProductReviewFormProps) => {
  const { isOpen, onClose, onToggle } = useDisclosure({ defaultIsOpen: false })
  const [rateValue, setRateValue] = useState('3')
  const [reviewValue, setReviewValue] = useState('')
  const initialRef = useRef()

  const submitReview = () => {
    onSubmitReview(rateValue, reviewValue)
    setRateValue('3')
    setReviewValue('')
    onClose()
  }

  const handleInputChange = (e) => setReviewValue(e.target.value)

  return (
    <>
      <BrandButton onClick={onToggle} isLoading={isLoading}>
        Add Review
      </BrandButton>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add your review</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column">
              <FormControl id="review" isRequired>
                <FormLabel>Rate</FormLabel>
                <RadioGroup onChange={setRateValue} value={rateValue}>
                  <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 2, md: 5 }}>
                    <Radio colorScheme="blackAlpha" value="1">
                      Disappointing
                    </Radio>
                    <Radio colorScheme="blackAlpha" value="2">
                      Could be better
                    </Radio>
                    <Radio colorScheme="blackAlpha" value="3" ref={initialRef}>
                      Okay
                    </Radio>
                    <Radio colorScheme="blackAlpha" value="4">
                      Good
                    </Radio>
                    <Radio colorScheme="blackAlpha" value="5">
                      Awesome
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <FormControl mt={10} id="review" isRequired>
                <FormLabel>Review</FormLabel>
                <Textarea
                  value={reviewValue}
                  onChange={handleInputChange}
                  placeholder="Type here your review..."
                  size="sm"
                />
              </FormControl>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <BrandButton isLoading={false} type="submit" onClick={submitReview}>
              Submit review
            </BrandButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export { ProductReviewForm }
